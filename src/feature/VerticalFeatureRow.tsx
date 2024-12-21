import classNames from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const router = useRouter();

  // Conditional class for reversing the layout
  const verticalFeatureClass = classNames(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={verticalFeatureClass}>
      {/* Text Section */}
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9 text-gray-600">
          {props.description}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full p-6 sm:w-1/2">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
