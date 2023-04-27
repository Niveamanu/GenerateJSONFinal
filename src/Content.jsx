import React from "react";

import { data, endpoint, stream } from "./data";

import { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useGlobalContext } from "./Context";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import MultiSelect from "multiselect-react-dropdown";

const DynamicForm = () => {
  const { currentItem } = useGlobalContext();
  const [selected, setSelected] = useState(null);
  const [options, setOptions] = useState([]);
  const [fin, setFin] = useState([]);
  useEffect(() => {
    const fun = () => {
      let x = [];

      data

        .filter((item) => item.type == "select")

        .map((i) => {
          endpoint

            .filter(
              (item) => item.type == i.label && item.stream == currentItem
            )

            .map((filterdata) => x.push(filterdata.label));
        });

      setOptions(x);
    };

    fun();
  }, []);
  let [initval, setinitval] = useState([
    data.reduce((defaults, field) => {
      return { ...defaults, [field.name]: field.initialValue };
    }, {}),
  ]);

  let [jsonfile, setjsonfile] = useState([]);

  const [FieldDefaults, setFieldDefaults] = useState(
    data.reduce((defaults, field) => {
      return { ...defaults, [field.name]: field.initialValue };
    }, {})
  );

  useEffect(() => {
    // setSelected(0);
    {
      stream
        .filter((item) => item.name == currentItem)
        .map((x) => {
          const index = x.id;

          if (initval[index] === undefined) setFieldDefaults(initval[0]);
          else setFieldDefaults(initval[index]);
        });
    }
  }, [currentItem]);

  const toggle = (i) => {
    if (selected === i) return setSelected(null);

    setSelected(i);
  };

  var uniqueheader = [];

  for (let i = 0; i < data.length; i++) {
    if (uniqueheader.indexOf(data[i].header) === -1) {
      uniqueheader.push(data[i].header);
    }
  }

  const testdata = uniqueheader.map((items, i) => {
    return data
      .filter(
        (item) => item.header == items && item.stream.includes(currentItem)
      )
      .map((items) => {
        return items.header;
      });
  });
  const testdatalen = testdata.map((items, i) => {
    return items.length;
  });

  return (
    <div className="hero-container">
      <Formik
        key={`${currentItem}`}
        initialValues={FieldDefaults}
        enableReinitialize
        onSubmit={(values) => {
          console.log(fin);
          var sorted = {};

          for (var i = 0, max = data.length; i < max; i++) {
            if (sorted[data[i].header] == undefined) {
              sorted[data[i].header] = [];
            }

            sorted[data[i].header].push(data[i].name);
          }

          const obj2 = { credential: {}, parameter: {}, endpoint: {} };

          {
            uniqueheader.map((items) => {
              const array = sorted[items];

              const obj = values;

              function picker(array, obj) {
                return array.reduce(function (newObj, key) {
                  if (key in obj) newObj[key] = obj[key];

                  {
                    if (items == "credentials") {
                      obj2.credential = newObj;

                      return newObj;
                    }

                    if (items == "parameters") {
                      obj2.parameter = newObj;

                      return newObj;
                    }

                    if (items == "Endpoint") {
                      obj2.endpoint = newObj;

                      return newObj;
                    }
                  }
                }, {});
              }

              picker(array, obj);
            });
          }

          const test = `{${currentItem}:` + (JSON.stringify(obj2) + "}");

          {
            stream
              .filter((item) => item.name == currentItem)
              .map((x) => {
                const index = x.id;
                initval[index] = values;

                jsonfile[index - 1] = test;
              });
          }

          alert(jsonfile);
        }}
      >
        <Form>
          <div>
            {uniqueheader.map((items, i) => {
              if (testdatalen[i] > 0) {
                return (
                  <section className="question">
                    <div className="title" onClick={() => toggle(i)}>
                      <h4 className="hd-btn">{items}</h4>

                      <span>{selected === i ? "-" : "+"}</span>
                    </div>
                    <div
                      key={i}
                      className={selected === i ? "content show" : "content"}
                    >
                      {data
                        .filter(
                          (item) =>
                            item.header == items &&
                            item.stream.includes(currentItem)
                        )
                        .map((filteredlist, i) => (
                          <>
                            <div className="form-row header" key={i}>
                              <label
                                htmlFor={filteredlist.name}
                                className="form-label"
                              >
                                {filteredlist.label}
                              </label>
                              {filteredlist.type == "text" && (
                                <Field
                                  type={filteredlist.type}
                                  name={filteredlist.name}
                                  id={filteredlist.id}
                                  className="form-input"
                                  {...filteredlist}
                                />
                              )}
                              {filteredlist.type == "url" && (
                                <Field
                                  type={filteredlist.type}
                                  name={filteredlist.name}
                                  id={filteredlist.id}
                                  className="form-input"
                                  {...filteredlist}
                                />
                              )}

                              {filteredlist.type == "select" && (
                                <MultiSelect
                                  isObject={false}
                                  options={options}
                                  showCheckbox
                                  name={options}
                                  onSelect={(event) => setFin(event)}
                                ></MultiSelect>
                              )}

                              <ErrorMessage name={filteredlist.name}>
                                {(msg) => <div className="error">{msg}</div>}
                              </ErrorMessage>
                            </div>
                          </>
                        ))}
                    </div>
                  </section>
                );
              } else return null;
            })}
          </div>
          <button type="submit" className="btn" onSubmit={Formik.onSubmit}>
            save data
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default DynamicForm;
