export interface INgxGalleryAction {
    icon: string;
    disabled?: boolean;
    titleText?: string;

    onClick: (event: Event, index: number) => void;
}

export class NgxGalleryAction implements INgxGalleryAction {
    icon: string;
    disabled?: boolean;
    titleText?: string;

    onClick: (event: Event, index: number) => void;

    constructor(action: INgxGalleryAction) {
        this.icon = action.icon;
        this.disabled = action.disabled ? action.disabled : false;
        this.titleText = action.titleText ? action.titleText : '';

        this.onClick = action.onClick;
    }
}
