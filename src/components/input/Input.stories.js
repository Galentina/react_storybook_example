import Input from "./Input";
import {Center} from "../center/Center";

export default {
    title: 'Form/Input',
    decorators: [story => <Center>{ story() }</Center>],
    component: Input,
}

export const Small = () => <Input size='small' placeholder='Small size'/>
export const Medium = () => <Input size='medium' placeholder='Medium size'/>
export const Large = () => <Input size='large' placeholder='Large size'/>

Small.storyName = 'Small Input';
Medium.storyName = 'Medium Input';
Large.storyName = 'Large Input';
