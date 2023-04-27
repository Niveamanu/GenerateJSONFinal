export const data = [
  {
    id: "client_id",
    type: "text",
    name: "client_id",
    stream: ["Youtube", "LinkedIn"],
    header: "credentials",
    label: "Client ID",

    required: true,

    initialValue: "",
  },

  {
    id: "client_secret",

    type: "text",

    name: "client_secret",
    stream: ["Youtube", "LinkedIn"],

    header: "credentials",
    label: "Client Secret",

    required: true,

    initialValue: "",
  },

  {
    id: "redirect_uri",

    type: "url",

    name: "redirect_uri",
    stream: ["Youtube", "LinkedIn"],

    header: "credentials",
    label: "Redirect URI",

    required: true,

    initialValue: "",
  },

  {
    id: "token_url",

    type: "url",

    name: "token_url",
    stream: ["Youtube", "LinkedIn"],

    header: "credentials",
    label: "Token URL",

    required: true,

    initialValue: "",
  },

  {
    id: "base_url",

    type: "url",

    name: "base_url",
    stream: ["Youtube", "LinkedIn"],

    header: "credentials",
    label: "Base URL",

    required: true,

    initialValue: "",
  },

  {
    id: "authorization_url",

    type: "url",

    name: "authorization_url",
    stream: ["Youtube", "LinkedIn"],

    header: "credentials",
    label: "Authorization URL",

    required: true,

    initialValue: "",
  },

  {
    id: "organization_URN",

    type: "text",

    name: "organization_URN",
    stream: ["Youtube", "LinkedIn"],

    header: "parameters",
    label: "Organization URN",

    required: true,

    initialValue: "",
  },

  {
    id: "organization_id",

    type: "text",

    name: "organization_id",
    stream: ["Youtube", "LinkedIn"],

    header: "parameters",
    label: "Organization ID",

    required: true,

    initialValue: "",
  },

  {
    id: "start_time",

    type: "text",

    name: "start_time",
    stream: ["Youtube", "LinkedIn"],

    header: "parameters",
    label: "Start Time",

    required: true,

    initialValue: "",
  },

  {
    id: "end_time",

    type: "text",

    name: "end_time",
    stream: ["Youtube", "LinkedIn"],

    header: "parameters",
    label: "End Time",

    required: true,

    initialValue: "",
  },

  {
    id: "headers",

    type: "text",

    name: "headers",
    stream: ["Youtube", "LinkedIn"],

    header: "parameters",
    label: " Headers",

    required: true,

    initialValue: "",
  },

  {
    id: "data",

    type: "text",

    name: "data",
    stream: ["Youtube", "LinkedIn"],

    header: "parameters",
    label: "Data",

    required: true,

    initialValue: "",
  },
  {
    id: "LifeTime",

    type: "select",

    name: "life_tym",
    stream: ["Youtube", "LinkedIn"],

    header: "Endpoint",
    label: "LifeTime",

    required: true,

    initialValue: "",
  },
  {
    id: "TimeBound",

    type: "select",

    name: "time_bound",
    stream: ["Youtube", "LinkedIn"],

    header: "Endpoint",
    label: "TimeBound",

    required: true,

    initialValue: "",
  },
];

export const endpoint = [
  {
    label: "lifetime_follow_stat",
    value:
      "organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity={organization_URN}",
    stream: "LinkedIn",
    type: "LifeTime",
  },
  {
    label: "memb_org_access_ctrl",
    value: "organizationAcls?q=roleAssignee",
    stream: "LinkedIn",
    type: "LifeTime",
  },
  {
    label: "timebound_org_page_stat",
    value:
      "organizationPageStatistics?q=organization&organization={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",
    stream: "Youtube",
    type: "TimeBound",
  },
  {
    label: "timebound_share_stat",
    value:
      "organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",
    stream: "LinkedIn",
    type: "TimeBound",
  },
];

export const stream = [
  {
    id: 1,

    name: "LinkedIn",
  },

  {
    id: 2,

    name: "Youtube",
  },
];
