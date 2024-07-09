import React from "react";
import Sidemenu from "./sidemenu";
import { title } from "process";



export default {
    children:'',
    title:'sidemenu',
    component: Sidemenu,

}
const Template =(args:any)=>{
    return <Sidemenu {...args} />
}


const props={
    defaultProps:()=>({

    }),
}
export const SideMenuStory : any = Template.bind({});
const defaultProps = props.defaultProps;
SideMenuStory.storyName = 'SideMenu';
SideMenuStory.args ={
    ...defaultProps 
}