export interface CheckBoxProps {
    labelText: string;
    id: string;
    className: string;
    checked: boolean;
    onChange: () => void;
}