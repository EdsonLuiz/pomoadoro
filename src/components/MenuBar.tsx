import { ReactNode } from "react";

interface InternalComponentProps {
  children: ReactNode;
}

export function MenuBar() {
  return (
    <Container>
      <div className="flex flex-col items-center w-full h-full pt-10 ">
        <img src="/icons/pomoadoro.svg" alt="logo do pomoadoro" />
        <menu className="flex flex-col items-center justify-center flex-1 w-full p-0 m-0 space-y-4 ">
          <svg
            className="transition-colors duration-300 stroke-current dark:hover:text-indigo-300 dark:text-gray-100 text-warmGray-500 hover:text-indigo-500"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 29.3333V16H20V29.3333"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="transition-colors duration-300 stroke-current dark:hover:text-indigo-300 dark:text-gray-100 text-warmGray-500 hover:text-indigo-500"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0001 20C21.1547 20 25.3334 15.8214 25.3334 10.6667C25.3334 5.51205 21.1547 1.33337 16.0001 1.33337C10.8454 1.33337 6.66675 5.51205 6.66675 10.6667C6.66675 15.8214 10.8454 20 16.0001 20Z"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9466 18.52L9.33325 30.6667L15.9999 26.6667L22.6666 30.6667L21.0533 18.5067"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="transition-colors duration-300 stroke-current dark:hover:text-indigo-300 dark:text-gray-100 text-warmGray-500 hover:text-indigo-500"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 17.0533C27.7903 19.3229 26.9385 21.4859 25.5443 23.2891C24.1502 25.0922 22.2713 26.4611 20.1276 27.2354C17.9839 28.0097 15.664 28.1575 13.4393 27.6615C11.2147 27.1654 9.17732 26.0461 7.56562 24.4344C5.95393 22.8227 4.83458 20.7853 4.33853 18.5607C3.84249 16.336 3.99028 14.0161 4.7646 11.8724C5.53893 9.72868 6.90777 7.84982 8.71094 6.45567C10.5141 5.06152 12.6771 4.20974 14.9467 4C13.6179 5.79769 12.9785 8.0126 13.1447 10.2419C13.3109 12.4712 14.2718 14.5667 15.8525 16.1475C17.4332 17.7282 19.5288 18.689 21.7581 18.8553C23.9874 19.0215 26.2023 18.3821 28 17.0533V17.0533Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </menu>
      </div>
    </Container>
  );
}

const Container = ({ children }: InternalComponentProps) => (
  <div className="h-full bg-white dark:bg-trueGray-700">{children}</div>
);
