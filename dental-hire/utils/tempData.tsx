import { ICON_MAPPER } from "@/utils/constants";
import {
  IMsg,
  INotification,
  IProfessional,
  IBooking,
  IJob,
  IApplicant,
} from "./interfaces";

export const USER_ACCOUNT_SETTING = [
  {
    id: 1,
    desc: "Our Public Profile",
    logo: ICON_MAPPER.user,
    isExtendible: true,
  },
  {
    id: 2,
    desc: "Practice Info",
    logo: ICON_MAPPER.info,
    isExtendible: false,
  },
  {
    id: 3,
    desc: "Professionals",
    logo: ICON_MAPPER.bag,
    isExtendible: true,
  },
  {
    id: 4,
    desc: "Administrators",
    logo: ICON_MAPPER.meeting,
    isExtendible: false,
  },
  {
    id: 5,
    desc: "Billing Info",
    logo: ICON_MAPPER.bill,
    isExtendible: false,
  },
  {
    id: 6,
    desc: "Direct Deposit",
    logo: ICON_MAPPER.deposit,
    isExtendible: false,
    link: "/revenue",
  },
  {
    id: 7,
    desc: "Account Settings",
    logo: ICON_MAPPER.userSetting,
    isExtendible: true,
  },
  {
    id: 8,
    desc: "Notifications",
    logo: ICON_MAPPER.notification,
    isExtendible: false,
  },
  {
    id: 9,
    desc: "Log out",
    logo: ICON_MAPPER.logout,
    isExtendible: false,
  },
];

export const TEMP_MESSAGES: IMsg[] = [
  {
    id: 1,
    sender: "Jane Cooper",
    imgSrc: "/assets/images/chatAvatar1.png",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
  },
  {
    id: 2,
    sender: "Wade Warren",
    imgSrc: "/assets/images/chatAvatar2.png",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 3,
    sender: "Cameron Williamson",
    imgSrc: "/assets/images/chatAvatar3.png",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es",
  },
  {
    id: 4,
    sender: "Brooklyn Simmons",
    imgSrc: "/assets/images/chatAvatar4.png",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
  },
  {
    id: 5,
    sender: "Guy Hawkins",
    imgSrc: "/assets/images/chatAvatar5.png",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
  },
];

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

export const TEMP_BOOKING: IBooking[] = [
  {
    id: 1,
    label: "Arlene McCoy",
    bookingTime: "Dec 30, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "pending",
  },
  {
    id: 2,
    label: "Savannah Nguyen",
    bookingTime: "Jan 1, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "completed",
  },
  {
    id: 3,
    label: "Leslie Alexander",
    bookingTime: "Jan 5, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "ongoing",
  },
  {
    id: 4,
    label: "Annette Black",
    bookingTime: "Jan 10, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "pending",
  },
  {
    id: 5,
    label: "AJenny Wilson",
    bookingTime: "Jan 31, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "completed",
  },
  {
    id: 6,
    label: "Esther Howard",
    bookingTime: "Feb 5, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "ongoing",
  },
  {
    id: 7,
    label: "Arlene McCoy",
    bookingTime: "Feb 12, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "completed",
  },
  {
    id: 8,
    label: "Savannah Nguyen",
    bookingTime: "Feb 12, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "completed",
  },
  {
    id: 9,
    label: "Leslie Alexander",
    bookingTime: "Feb 25, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "completed",
  },
  {
    id: 10,
    label: "Annette Black",
    bookingTime: "Feb 28, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "pending",
  },
  {
    id: 11,
    label: "Jenny Wilson",
    bookingTime: "Feb 29, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "pending",
  },
  {
    id: 12,
    label: "Esther Howard",
    bookingTime: "Mar 1, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "ongoing",
  },
  {
    id: 13,
    label: "Arlene McCoy",
    bookingTime: "Mar 2, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "ongoing",
  },
  {
    id: 14,
    label: "Annette Black",
    bookingTime: "Mar 2, 2023 10:00 AM",
    bookingWith: "Lorem ipsum",
    breakTime: "10:00 AM-11:00 AM",
    estHours: "2 Hours",
    hourlyRate: "$56.70",
    payment: "Lorem ipsum",
    status: "ongoing",
  },
];

export const TEMP_APPLICANT: IApplicant[] = [
  {
    id: 1,
    avatar: "/assets/images/professional1.png",
    name: "Courtney Henry",
    reviews: 4.5,
    rate: 20,
    booking: 4,
  },
  {
    id: 2,
    avatar: "/assets/images/professional2.png",
    name: "Jacob Jones",
    reviews: 4.8,
    rate: 25,
    booking: 6,
  },
  {
    id: 3,
    avatar: "/assets/images/professional3.png",
    name: "Cody Fisher",
    reviews: 4.3,
    rate: 30,
    booking: 5,
  },
  {
    id: 4,
    avatar: "/assets/images/professional4.png",
    name: "Cameron Williamson",
    reviews: 4.2,
    rate: 20,
    booking: 2,
  },
  {
    id: 5,
    avatar: "/assets/images/professional5.png",
    name: "Darlene Robertson",
    reviews: 3.9,
    rate: 15,
    booking: 3,
  },
  {
    id: 6,
    avatar: "/assets/images/professional6.png",
    name: "Ivan Bushev",
    reviews: 4.7,
    rate: 45,
    booking: 10,
  },
];
