declare module 'example-library' {
  interface IButton {
    content: string;
    onPress(): void;
  }

  export function Button(props: IButton): JSX.Element;
}
