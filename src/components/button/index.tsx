import { ButtonType } from "./button-models";

const Button = ({ href, children, ...buttonProps }: ButtonType) => {
  if (href) {
    return (
      <a
        {...buttonProps}
        className="flex justify-center p-2 rounded-lg text-dark-color-01 bg-dark-bg-02 dark:bg-light-bg-02 dark:text-light-color-01 hover:scale-110"
        href="../../../static/curriculo-cleber.pdf"
        target="__blanck"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...buttonProps}
      className="flex justify-center p-2 rounded-lg text-dark-color-01 bg-dark-bg-02 dark:bg-light-bg-02 dark:text-light-color-01 hover:scale-110"
    >
      {children}
    </button>
  );
};

export default Button;
