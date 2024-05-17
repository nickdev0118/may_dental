import { CountryType } from "./interfaces";

export const SCREEN_MAPPER = {
  xs: "320px",
  ss: "450px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const PATH_MAPPER = {
  dashboard: "/dashboard",
  findProfessionals: "/find-professionals",
  bookings: "/bookings",
  jobPosting: "/job-posting",
  messages: "/messages",
  revenue: "/revenue",
  donate: "/",
  help: "/help",
  signin: "/signin",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  otpVerify: "/otp-verify",
  createPassword: "/create-password",
  profile: "/profile",
};

export const PATHNAME_MAPPER = {
  [PATH_MAPPER.dashboard]: "Dashboard",
  [PATH_MAPPER.findProfessionals]: "Find Professionals",
  [PATH_MAPPER.bookings]: "Bookings",
  [PATH_MAPPER.jobPosting]: "Job Posting",
  [PATH_MAPPER.messages]: "Messages",
  [PATH_MAPPER.revenue]: "Revenue",
  [PATH_MAPPER.donate]: "Donate",
  [PATH_MAPPER.help]: "Help",
  [PATH_MAPPER.signin]: "Sign in",
  [PATH_MAPPER.signup]: "Sign up",
  [PATH_MAPPER.forgotPassword]: "Forgot Password",
  [PATH_MAPPER.otpVerify]: "OTP Verification",
  [PATH_MAPPER.createPassword]: "Create New Password",
};

export const COLOR_MAPPER = {
  primary: "#8032FF",
  secondary: "#FF817B",
  success: "#00D391",
  warning: "#FFAD32",
  error: "#FF3257",
  dark: "#1F1233",
  lightDark: "#7A6899",
};

export const ICON_MAPPER = {
  dashboard: "mingcute:grid-fill",
  searchUserIcon: "lucide:user-round-search",
  starCalendar: "bxs:calendar-star",
  calendar: "solar:calendar-bold",
  clock: "tabler:clock-filled",
  bag: "tabler:briefcase-filled",
  dollarSack: "fa6-solid:sack-dollar",
  message: "solar:chat-dots-bold",
  mail: "gridicons:mail",
  phone: "ic:round-phone",
  notification: "ion:notifications",
  menu: "heroicons-solid:menu-alt-3",
  donate: "fa6-solid:hand-holding-dollar",
  help: "material-symbols:help",
  user: "oi:person",
  info: "material-symbols:info",
  meeting: "mdi:virtual-meeting",
  bill: "mingcute:bill-fill",
  deposit: "memory:cash",
  userSetting: "mdi:account-cog",
  logout: "streamline:logout-1-solid",
  edit: "eva:edit-2-fill",
  externalLink: "tabler:external-link",
  cog: "teenyicons:cog-solid",
  star: "mingcute:star-fill",
  diamond: "ion:diamond",
  check: "ic:round-check",
  cross: "entypo:cross",
  close: "ic:round-close",
  leftArrow: "ep:arrow-left-bold",
  rightArrow: "ep:arrow-right-bold",
  upArrow: "ep:arrow-up-bold",
  downArrow: "ep:arrow-down-bold",
  leftLongArrow: "ph:arrow-left-bold",
  filter: "ci:filter",
  plus: "ic:round-plus",
  minus: "ic:round-minus",
  userStars: "mingcute:user-star-fill",
  archive: "ic:sharp-archive",
  reopenClock: "tabler:clock-check",
  trash: "bxs:trash",
  chat: "entypo:chat",
  search: "tabler:search",
  mute: "octicon:mute-16",
  userBlock: "basil:user-block-solid",
  userReport: "material-symbols:person-alert-rounded",
  vEllipsis: "nimbus:ellipsis",
  send: "bxs:send",
  copy: "clarity:copy-line",
  circleFilledCheck: "ph:check-circle-fill",
  circleCheck: "ph:check-circle-light",
  gallery: "solar:gallery-bold",
  lock: "material-symbols:lock",
  delete: "material-symbols:delete",
  eye: "mdi:eye",
  eyeOff: "mdi:eye-off",
  heart: "tabler:heart-filled",
};

export const STATUS_MAPPER = {
  pending: "pending",
  completed: "completed",
  ongoing: "ongoing",
  open: "Open",
  pendingApproval: "Pending Approval",
  closed: "Closed",
  archived: "Archived",
  unarchived: "Unarchived",
  notVerified: "Not Verified",
  active: "Active",
};

export const TEMP_CALENDAR_EVENTS = [
  {
    id: 1,
    title: "10:00 AM To 11:00 AM",
    start: new Date(2024, 0, 5, 10, 0, 0, 0),
    end: new Date(2024, 0, 5, 11, 0, 0, 0),
  },
  {
    id: 2,
    title: "10:00 AM To 11:00 AM",
    start: new Date(2024, 0, 7, 10, 0, 0, 0),
    end: new Date(2024, 0, 7, 11, 0, 0, 0),
  },
  {
    id: 3,
    title: "12x",
    start: new Date(2024, 0, 8, 10, 0, 0, 0),
    end: new Date(2024, 0, 8, 11, 0, 0, 0),
  },
  {
    id: 4,
    title: "10:00 AM To 11:00 AM",
    start: new Date(2024, 0, 17, 10, 0, 0, 0),
    end: new Date(2024, 0, 17, 11, 0, 0, 0),
  },
  {
    id: 5,
    title: "3x",
    start: new Date(2024, 0, 18, 10, 0, 0, 0),
    end: new Date(2024, 0, 18, 11, 0, 0, 0),
  },
  {
    id: 6,
    title: "10:00 AM To 11:00 AM",
    start: new Date(2024, 0, 21, 10, 0, 0, 0),
    end: new Date(2024, 0, 21, 11, 0, 0, 0),
  },
  {
    id: 7,
    title: "5x",
    start: new Date(2024, 0, 23, 10, 0, 0, 0),
    end: new Date(2024, 0, 23, 11, 0, 0, 0),
  },
  {
    id: 8,
    title: "10:00 AM To 11:00 AM",
    start: new Date(2024, 0, 26, 10, 0, 0, 0),
    end: new Date(2024, 0, 26, 11, 0, 0, 0),
  },
  {
    id: 9,
    title: "1 Application",
    start: new Date(2024, 0, 30, 10, 0, 0, 0),
    end: new Date(2024, 0, 30, 11, 0, 0, 0),
  },
  {
    id: 10,
    title: "4x",
    start: new Date(2024, 0, 30, 11, 0, 0, 0),
    end: new Date(2024, 0, 30, 12, 0, 0, 0),
  },
  {
    id: 11,
    title: "10:00 AM To 11:00 AM",
    start: new Date(2024, 0, 31, 11, 0, 0, 0),
    end: new Date(2024, 0, 31, 12, 0, 0, 0),
  },
  {
    id: 12,
    title: "10:00 AM To 11:00 AM",
    start: new Date(2024, 1, 3, 11, 0, 0, 0),
    end: new Date(2024, 1, 3, 12, 0, 0, 0),
  },
];

export const SCHEDULE_TIMES = [
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

export const SHORT_WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

export const NAV_LINKS = {
  primary: [
    {
      id: 1,
      icon: ICON_MAPPER.dashboard,
      path: PATH_MAPPER.dashboard,
      name: PATHNAME_MAPPER[PATH_MAPPER.dashboard],
    },
    {
      id: 2,
      icon: ICON_MAPPER.searchUserIcon,
      path: PATH_MAPPER.findProfessionals,
      name: PATHNAME_MAPPER[PATH_MAPPER.findProfessionals],
    },
    {
      id: 3,
      icon: ICON_MAPPER.calendar,
      path: PATH_MAPPER.bookings,
      name: PATHNAME_MAPPER[PATH_MAPPER.bookings],
    },
    {
      id: 4,
      icon: ICON_MAPPER.message,
      path: PATH_MAPPER.messages,
      name: PATHNAME_MAPPER[PATH_MAPPER.messages],
    },
    {
      id: 5,
      icon: ICON_MAPPER.bag,
      path: PATH_MAPPER.jobPosting,
      name: PATHNAME_MAPPER[PATH_MAPPER.jobPosting],
    },
    {
      id: 7,
      icon: ICON_MAPPER.dollarSack,
      path: PATH_MAPPER.revenue,
      name: PATHNAME_MAPPER[PATH_MAPPER.revenue],
    },
  ],
  secondary: [
    {
      id: 1,
      icon: ICON_MAPPER.donate,
      path: PATH_MAPPER.donate,
      name: PATHNAME_MAPPER[PATH_MAPPER.donate],
    },
    {
      id: 2,
      icon: ICON_MAPPER.help,
      path: PATH_MAPPER.help,
      name: PATHNAME_MAPPER[PATH_MAPPER.help],
    },
  ],
};

export const VALIDATION_REQUIRED_FIELD = "Required field";
export const VALIDATION_INVALID_EMAIL = "Invalid email";
export const VALIDATION_INVALID_PHONE = "Invalid phone";
export const VALIDATION_DISMATCH_PASSWORDS = "Passwords are dismatched.";

export const REGEX_PHONE_NUMBER =
  /^\+(1\s*[-\/\.]?)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT])\.?\s*(\d+))*$/;

export const L_STORAGE_AUTH_TOKEN = "AUTH_TOKEN";
export const L_STORAGE_REFRESH_TOKEN = "REFRESH_TOKEN";

export const PATHS_BEFORE_AUTH = [
  PATH_MAPPER.signin,
  PATH_MAPPER.signup,
  PATH_MAPPER.otpVerify,
  PATH_MAPPER.createPassword,
  PATH_MAPPER.forgotPassword,
];

export const COUNTRIES: readonly CountryType[] = [
  { code: "AD", label: "Andorra" },
  { code: "AE", label: "United Arab Emirates" },
  { code: "AF", label: "Afghanistan" },
  { code: "AG", label: "Antigua and Barbuda" },
  { code: "AI", label: "Anguilla" },
  { code: "AL", label: "Albania" },
  { code: "AM", label: "Armenia" },
  { code: "AO", label: "Angola" },
  { code: "AQ", label: "Antarctica" },
  { code: "AR", label: "Argentina" },
  { code: "AS", label: "American Samoa" },
  { code: "AT", label: "Austria" },
  { code: "AU", label: "Australia", suggested: true },
  { code: "AW", label: "Aruba" },
  { code: "AX", label: "Alland Islands" },
  { code: "AZ", label: "Azerbaijan" },
  { code: "BA", label: "Bosnia and Herzegovina" },
  { code: "BB", label: "Barbados" },
  { code: "BD", label: "Bangladesh" },
  { code: "BE", label: "Belgium" },
  { code: "BF", label: "Burkina Faso" },
  { code: "BG", label: "Bulgaria" },
  { code: "BH", label: "Bahrain" },
  { code: "BI", label: "Burundi" },
  { code: "BJ", label: "Benin" },
  { code: "BL", label: "Saint Barthelemy" },
  { code: "BM", label: "Bermuda" },
  { code: "BN", label: "Brunei Darussalam" },
  { code: "BO", label: "Bolivia" },
  { code: "BR", label: "Brazil" },
  { code: "BS", label: "Bahamas" },
  { code: "BT", label: "Bhutan" },
  { code: "BV", label: "Bouvet Island" },
  { code: "BW", label: "Botswana" },
  { code: "BY", label: "Belarus" },
  { code: "BZ", label: "Belize" },
  { code: "CA", label: "Canada", suggested: true },
  { code: "CC", label: "Cocos (Keeling) Islands" },
  { code: "CD", label: "Congo, Democratic Republic of the" },
  { code: "CF", label: "Central African Republic" },
  { code: "CG", label: "Congo, Republic of the" },
  { code: "CH", label: "Switzerland" },
  { code: "CI", label: "Cote d'Ivoire" },
  { code: "CK", label: "Cook Islands" },
  { code: "CL", label: "Chile" },
  { code: "CM", label: "Cameroon" },
  { code: "CN", label: "China" },
  { code: "CO", label: "Colombia" },
  { code: "CR", label: "Costa Rica" },
  { code: "CU", label: "Cuba" },
  { code: "CV", label: "Cape Verde" },
  { code: "CW", label: "Curacao" },
  { code: "CX", label: "Christmas Island" },
  { code: "CY", label: "Cyprus" },
  { code: "CZ", label: "Czech Republic" },
  { code: "DE", label: "Germany", suggested: true },
  { code: "DJ", label: "Djibouti" },
  { code: "DK", label: "Denmark" },
  { code: "DM", label: "Dominica" },
  { code: "DO", label: "Dominican Republic" },
  { code: "DZ", label: "Algeria" },
  { code: "EC", label: "Ecuador" },
  { code: "EE", label: "Estonia" },
  { code: "EG", label: "Egypt" },
  { code: "EH", label: "Western Sahara" },
  { code: "ER", label: "Eritrea" },
  { code: "ES", label: "Spain" },
  { code: "ET", label: "Ethiopia" },
  { code: "FI", label: "Finland" },
  { code: "FJ", label: "Fiji" },
  { code: "FK", label: "Falkland Islands (Malvinas)" },
  { code: "FM", label: "Micronesia, Federated States of" },
  { code: "FO", label: "Faroe Islands" },
  { code: "FR", label: "France", suggested: true },
  { code: "GA", label: "Gabon" },
  { code: "GB", label: "United Kingdom" },
  { code: "GD", label: "Grenada" },
  { code: "GE", label: "Georgia" },
  { code: "GF", label: "French Guiana" },
  { code: "GG", label: "Guernsey" },
  { code: "GH", label: "Ghana" },
  { code: "GI", label: "Gibraltar" },
  { code: "GL", label: "Greenland" },
  { code: "GM", label: "Gambia" },
  { code: "GN", label: "Guinea" },
  { code: "GP", label: "Guadeloupe" },
  { code: "GQ", label: "Equatorial Guinea" },
  { code: "GR", label: "Greece" },
  { code: "GS", label: "South Georgia and the South Sandwich Islands" },
  { code: "GT", label: "Guatemala" },
  { code: "GU", label: "Guam" },
  { code: "GW", label: "Guinea-Bissau" },
  { code: "GY", label: "Guyana" },
  { code: "HK", label: "Hong Kong" },
  { code: "HM", label: "Heard Island and McDonald Islands" },
  { code: "HN", label: "Honduras" },
  { code: "HR", label: "Croatia" },
  { code: "HT", label: "Haiti" },
  { code: "HU", label: "Hungary" },
  { code: "ID", label: "Indonesia" },
  { code: "IE", label: "Ireland" },
  { code: "IL", label: "Israel" },
  { code: "IM", label: "Isle of Man" },
  { code: "IN", label: "India" },
  { code: "IO", label: "British Indian Ocean Territory" },
  { code: "IQ", label: "Iraq" },
  { code: "IR", label: "Iran, Islamic Republic of" },
  { code: "IS", label: "Iceland" },
  { code: "IT", label: "Italy" },
  { code: "JE", label: "Jersey" },
  { code: "JM", label: "Jamaica" },
  { code: "JO", label: "Jordan" },
  { code: "JP", label: "Japan", suggested: true },
  { code: "KE", label: "Kenya" },
  { code: "KG", label: "Kyrgyzstan" },
  { code: "KH", label: "Cambodia" },
  { code: "KI", label: "Kiribati" },
  { code: "KM", label: "Comoros" },
  { code: "KN", label: "Saint Kitts and Nevis" },
  { code: "KP", label: "Korea, Democratic People's Republic of" },
  { code: "KR", label: "Korea, Republic of" },
  { code: "KW", label: "Kuwait" },
  { code: "KY", label: "Cayman Islands" },
  { code: "KZ", label: "Kazakhstan" },
  { code: "LA", label: "Lao People's Democratic Republic" },
  { code: "LB", label: "Lebanon" },
  { code: "LC", label: "Saint Lucia" },
  { code: "LI", label: "Liechtenstein" },
  { code: "LK", label: "Sri Lanka" },
  { code: "LR", label: "Liberia" },
  { code: "LS", label: "Lesotho" },
  { code: "LT", label: "Lithuania" },
  { code: "LU", label: "Luxembourg" },
  { code: "LV", label: "Latvia" },
  { code: "LY", label: "Libya" },
  { code: "MA", label: "Morocco" },
  { code: "MC", label: "Monaco" },
  { code: "MD", label: "Moldova, Republic of" },
  { code: "ME", label: "Montenegro" },
  { code: "MF", label: "Saint Martin (French part)" },
  { code: "MG", label: "Madagascar" },
  { code: "MH", label: "Marshall Islands" },
  { code: "MK", label: "Macedonia, the Former Yugoslav Republic of" },
  { code: "ML", label: "Mali" },
  { code: "MM", label: "Myanmar" },
  { code: "MN", label: "Mongolia" },
  { code: "MO", label: "Macao" },
  { code: "MP", label: "Northern Mariana Islands" },
  { code: "MQ", label: "Martinique" },
  { code: "MR", label: "Mauritania" },
  { code: "MS", label: "Montserrat" },
  { code: "MT", label: "Malta" },
  { code: "MU", label: "Mauritius" },
  { code: "MV", label: "Maldives" },
  { code: "MW", label: "Malawi" },
  { code: "MX", label: "Mexico" },
  { code: "MY", label: "Malaysia" },
  { code: "MZ", label: "Mozambique" },
  { code: "NA", label: "Namibia" },
  { code: "NC", label: "New Caledonia" },
  { code: "NE", label: "Niger" },
  { code: "NF", label: "Norfolk Island" },
  { code: "NG", label: "Nigeria" },
  { code: "NI", label: "Nicaragua" },
  { code: "NL", label: "Netherlands" },
  { code: "NO", label: "Norway" },
  { code: "NP", label: "Nepal" },
  { code: "NR", label: "Nauru" },
  { code: "NU", label: "Niue" },
  { code: "NZ", label: "New Zealand" },
  { code: "OM", label: "Oman" },
  { code: "PA", label: "Panama" },
  { code: "PE", label: "Peru" },
  { code: "PF", label: "French Polynesia" },
  { code: "PG", label: "Papua New Guinea" },
  { code: "PH", label: "Philippines" },
  { code: "PK", label: "Pakistan" },
  { code: "PL", label: "Poland" },
  { code: "PM", label: "Saint Pierre and Miquelon" },
  { code: "PN", label: "Pitcairn" },
  { code: "PR", label: "Puerto Rico" },
  { code: "PS", label: "Palestine, State of" },
  { code: "PT", label: "Portugal" },
  { code: "PW", label: "Palau" },
  { code: "PY", label: "Paraguay" },
  { code: "QA", label: "Qatar" },
  { code: "RE", label: "Reunion" },
  { code: "RO", label: "Romania" },
  { code: "RS", label: "Serbia" },
  { code: "RU", label: "Russian Federation" },
  { code: "RW", label: "Rwanda" },
  { code: "SA", label: "Saudi Arabia" },
  { code: "SB", label: "Solomon Islands" },
  { code: "SC", label: "Seychelles" },
  { code: "SD", label: "Sudan" },
  { code: "SE", label: "Sweden" },
  { code: "SG", label: "Singapore" },
  { code: "SH", label: "Saint Helena" },
  { code: "SI", label: "Slovenia" },
  { code: "SJ", label: "Svalbard and Jan Mayen" },
  { code: "SK", label: "Slovakia" },
  { code: "SL", label: "Sierra Leone" },
  { code: "SM", label: "San Marino" },
  { code: "SN", label: "Senegal" },
  { code: "SO", label: "Somalia" },
  { code: "SR", label: "Suriname" },
  { code: "SS", label: "South Sudan" },
  { code: "ST", label: "Sao Tome and Principe" },
  { code: "SV", label: "El Salvador" },
  { code: "SX", label: "Sint Maarten (Dutch part)" },
  { code: "SY", label: "Syrian Arab Republic" },
  { code: "SZ", label: "Swaziland" },
  { code: "TC", label: "Turks and Caicos Islands" },
  { code: "TD", label: "Chad" },
  { code: "TF", label: "French Southern Territories" },
  { code: "TG", label: "Togo" },
  { code: "TH", label: "Thailand" },
  { code: "TJ", label: "Tajikistan" },
  { code: "TK", label: "Tokelau" },
  { code: "TL", label: "Timor-Leste" },
  { code: "TM", label: "Turkmenistan" },
  { code: "TN", label: "Tunisia" },
  { code: "TO", label: "Tonga" },
  { code: "TR", label: "Turkey" },
  { code: "TT", label: "Trinidad and Tobago" },
  { code: "TV", label: "Tuvalu" },
  { code: "TW", label: "Taiwan" },
  { code: "TZ", label: "United Republic of Tanzania" },
  { code: "UA", label: "Ukraine" },
  { code: "UG", label: "Uganda" },
  { code: "US", label: "United States", suggested: true },
  { code: "UY", label: "Uruguay" },
  { code: "UZ", label: "Uzbekistan" },
  { code: "VA", label: "Holy See (Vatican City State)" },
  { code: "VC", label: "Saint Vincent and the Grenadines" },
  { code: "VE", label: "Venezuela" },
  { code: "VG", label: "British Virgin Islands" },
  { code: "VI", label: "US Virgin Islands" },
  { code: "VN", label: "Vietnam" },
  { code: "VU", label: "Vanuatu" },
  { code: "WF", label: "Wallis and Futuna" },
  { code: "WS", label: "Samoa" },
  { code: "XK", label: "Kosovo" },
  { code: "YE", label: "Yemen" },
  { code: "YT", label: "Mayotte" },
  { code: "ZA", label: "South Africa" },
  { code: "ZM", label: "Zambia" },
  { code: "ZW", label: "Zimbabwe" },
];

interface IFormValues {
  title: string;
  description: string;
  general: boolean;
  private: boolean;
  hmo: boolean;
  ppo: boolean;
  orthodontics: boolean;
  pedodontics: boolean;
  periodontics: boolean;
  corporate: boolean;
  multiSpecialty: boolean;
  oralSurgery: boolean;
  prosthodontics: boolean;
  medicaid: boolean;
  singleDoctor: boolean;
  multiDoctor: boolean;
  jobType: string;
  professionalType: string;
  requiredYear: string;
}

export const practiceTypes: { id: number; label: keyof IFormValues }[] = [
  { id: 22, label: "general" },
  { id: 26, label: "private" },
  { id: 30, label: "hmo" },
  { id: 34, label: "ppo" },
  { id: 23, label: "orthodontics" },
  { id: 27, label: "pedodontics" },
  { id: 31, label: "periodontics" },
  { id: 35, label: "corporate" },
  { id: 24, label: "multiSpecialty" },
  { id: 28, label: "oralSurgery" },
  { id: 32, label: "prosthodontics" },
  { id: 25, label: "medicaid" },
  { id: 29, label: "singleDoctor" },
  { id: 33, label: "multiDoctor" },
];

export const professionalTypes: { id: number; label: string; key: string }[] = [
  { id: 1, label: "Dentist", key: "dentist" },
  { id: 2, label: "Hygienist", key: "hygienist" },
  { id: 3, label: "Dental Assistant", key: "dental-assistant" },
];
