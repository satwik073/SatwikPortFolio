import "@fortawesome/fontawesome-free/css/all.css";
import {  HtmlImage, Java, MongoShowed, NodeGesture, VsClone } from "../assets";
import { Javacript } from "../assets";
import { Css } from "../assets";
import { Python } from "../assets";
import { CProgramming } from "../assets";
import { ReactFlexImage } from "../assets";
import { GitNotIgnore } from "../assets";
import { TailwindCss } from "../assets";
export const Links = [
  {
    id: "1",
    title: "Facebook",
    icon: "fa-brands fa-facebook-f",
    url: "https://www.facebook.com/",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/",
  },
  {
    id: "3",
    title: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/",
  },
  {
    id: "4",
    title: "Contact",
    icon: "fa-solid fa-phone",
    url: "tel:6284486063",
  },
];

export const head = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const menuLinks = [
  {
    id: "1",
    title: "Home",
    toggle: "Home-Section",
  },
  {
    id: "2",
    title: "About Me",
    toggle: "#AboutSection",
  },
  {
    id: "3",
    title: "Practical Skills",
    toggle: "#SkillsSection",
  },
  {
    id: "4",
    title: "Projects",
    toggle: "#ProjectsSection",
  },
  {
    id: "5",
    title: "Certifications",
    toggle: "#CertificationSection",
  },
  {
    id: "6",
    title: "Achievements",
    toggle: "#AchievementsSection",
  },
  {
    id: "7",
    title: "Patents Filed",
    toggle: "#PatentsFiledSection",
  },
  {
    id: "8",
    title: "Research & Publications",
    toggle: "#ResearchPublicationsSection",
  },
];

export const qualities = [
  { id: "01.", title: "Problem-Solving Skills", skill: "Analytical Thinking" },
  { id: "02.", title: "Effective Communication", skill: "Clear Expression" },
  {
    id: "03.",
    title: "Continuous Learning",
    skill: "Curiosity & Adaptability",
  },
  {
    id: "04.",
    title: "Collaborative Team Player",
    skill: "Cooperation & Contribution",
  },
];

export const skills1 = [
  { name: "Java", percentage: "92%" },
  { name: "C/C++", percentage: "85%" },
  { name: "Python", percentage: "75%" },
  { name: "Blockchain", percentage: "65%" },
];
export const skills2 = [
  { name: "React JS /Next JS", percentage: "88%" },
  { name: "React Native", percentage: "84%" },
  { name: "Node JS / Express JS", percentage: "63%" },
  { name: "MongoDB / SQL", percentage: "63%" },
];
export const technologyIconsFixed = [
  {
    id: 1,
    iconFlex:HtmlImage,
    width:200,
  },
  {
    id: 2,
    iconFlex:Css,
    
    
    },
  {
    id: 3,
    iconFlex:Javacript,
   
  },
  {
    id: 4,
    iconFlex:Java,
    
  },
  {
    id: 5,
    iconFlex:Python,
  },
  {
    id: 6,
    iconFlex:CProgramming,
    
  },
  {
    id: 7,
    iconFlex:ReactFlexImage,
    
  },
 
  {
    id: 10,
    iconFlex:TailwindCss,
   
  },
  {
    id: 11,
    iconFlex:GitNotIgnore,
  
  },
  
  {
    id: 12,
    iconFlex:NodeGesture,
    
  },
  {
    id: 13,
    iconFlex:VsClone,
    
  },
  {
    id: 14,
    iconFlex:MongoShowed,
    
  },
];

const Constants = {
  Links,
  menuLinks,
  qualities,
  skills1,
  skills2,
  technologyIconsFixed
};

export default Constants;
