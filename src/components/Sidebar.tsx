import { gql, useQuery } from '@apollo/client'
import Lesson from './Lesson'

const GET_LESSONS_QUERY = gql `
  query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[]
}

interface ISidebarProps {
  isMenuClose: boolean;
}

export default function Sidebar({isMenuClose}: ISidebarProps) {
  const { data } =  useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  if(!isMenuClose && window.innerWidth < 1280){
    return (
      <aside className=" w-full md:w-[348px] absolute right-0 bg-gray-700 p-6 border-l border-gray-600 z-50 ">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>
        <div className="flex flex-col gap-8">
          {
            data?.lessons.map(lesson =>
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

  return (
    <aside className="w-full md:w-[348px] hidden md:block bg-gray-700 p-6 border-l border-gray-600 z-50">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson =>
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
