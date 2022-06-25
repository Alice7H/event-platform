import { useGetLessonsQuery } from '../graphql/generated';
import useWindowDimensions from '../hooks/useWindowDimensions';
import classNames from 'classnames';
import Lesson from './Lesson'
import Loading from './Loading';

interface ISidebarProps {
  isMenuClose: boolean;
}

export default function Sidebar({isMenuClose}: ISidebarProps) {
  const { data } =  useGetLessonsQuery();
  const { width } = useWindowDimensions();
  
  return (
    <aside className={classNames('w-full md:w-[348px] absolute right-0 md:block bg-gray-700 p-6 border-l border-gray-600 z-50',{
      'hidden': width >= 1280 || isMenuClose,
      'block': !isMenuClose && width < 1280
    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        { !data 
          ? <Loading /> 
          : data?.lessons.map(lesson =>
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        }
      </div>
    </aside>
  )
}
