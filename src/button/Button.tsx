import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  lg?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = classNames({
    btn: true,
    'btn-xl': props.xl,
    'btn-lg': props.lg,
    'btn-base': !props.xl && !props.lg,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center cursor-pointer;
          }

          .btn-base {
            @apply font-satoshi text-paragraph rounded-full py-2 px-4 text-white bg-secondary-500;
          }

          .btn-base:hover {
            @apply bg-primary-900 text-white;
          }

          .btn-xl {
            @apply font-satoshi text-button rounded-full py-4 px-6 text-white bg-primary-500;
          }

          .btn-xl:hover {
            @apply bg-secondary-100 text-primary-500;
          }

          .btn-lg {
            @apply font-satoshi text-paragraph rounded-full py-4 px-6 text-primary-500 bg-white;
          }

          .btn-lg:hover {
            @apply bg-primary-500 text-white;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
