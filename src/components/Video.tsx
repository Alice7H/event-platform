import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import {DefaultUi, Player, Youtube } from '@vime/react'
import Button from './Button'
import Loading from './Loading';
import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface IVideoProps {
  lessonSlug: string;
}

export default function Video(props: IVideoProps) {
  const {data} = useGetLessonBySlugQuery({
    variables:{ slug: props.lessonSlug }
  });

  if(!data || !data.lesson){
    return (
      <div className="flex-1 w-full md:max-w-[calc(100vw-348px)] items-center justify-center pt-4">
        <Loading />
      </div>
    )
  }

  return (
    <div className="md:flex-1 w-full md:max-w-[calc(100vw-348px)]">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100] mx-auto">
        <div className="flex items-start gap-16 flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {
              data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-4">
                  <img 
                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                    src={data.lesson.teacher.avatarURL} 
                    alt="Teacher avatar" 
                  />
                  <div className="leading-relaxed">
                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                  </div>
                </div>
              )
            }

          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button variant="primary" link="#">
              <DiscordLogo size={24}/>
              Comunidade do Discord
            </Button>
            <Button variant="secondary" link="#">
              <Lightning size={24}/>
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="gap-8 mt-20 pb-10 grid grid-cols-1 xl:grid-cols-2">
          <a
            aria-label='Material complementar'
            type="button"
            target="_blank" 
            href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-4 md:p-6 flex items-center">
              <FileArrowDown size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-base md:text-2xl">Material complementar</strong>
              <p className="text-xs md:text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-4 md:p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>

          <a 
            aria-label='Wallpapers exclusivos'
            type="button"
            target="_blank" 
            href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR" 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-4 md:p-6 flex items-center">
              <Image size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-base md:text-2xl">Wallpapers exclusivos</strong>
              <p className="text-xs md:text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-4 md:p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
