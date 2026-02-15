import React from "react";

export interface RangeInputProps {
    labelText: string;
    id: string;
    className: string;
    min: string;
    max: string;
    value: string;
    fullTrackColor: string;
    emptyTrackColor: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}