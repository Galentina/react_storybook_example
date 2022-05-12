import Button from "./Button";
import { Center } from "../center/Center";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Button'
    },
    argTypes: {
        variant: { control: 'text' },
        onClick: {action: 'clicked'}
    }
}

export const PrimaryButton = () => <Button onClick={ action('Click Handler') } variant='primary'>Primary</Button>
export const SecondaryButton = () => <Button { ...actions('onClick', 'onMouseOver') } variant='secondary'>Secondary</Button>
export const SuccessButton = () => <Button variant='success'>Success</Button>
export const DangerButton = () => <Button variant='danger'>Danger</Button>
export const LogButton = () => <Button variant='log' onClick={ () => console.log('Button Log click', process.env.STORYBOOK_THEME) }>Login</Button>

export const Knobs = () => <Button disabled={ boolean('Disabled', false) } variant={'purple'}
    { ...actions('onClick', 'onMouseOver')}>
    { text('Label', 'Button Label') }
</Button>

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    // children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}
