import React from "react";
import {Card, Skeleton, CardHeader, CardBody, Image, CircularProgress} from "@nextui-org/react";
import { formatDate } from "../js/functions"


export default function App({data,image_path,handleOpen}) {
  return (
    <>
    <div className="flex flex-wrap gap-3">
      <Card className="max-w-64 py-4 shadow hover:shadow-sky-500/40" isPressable onPress={() => handleOpen()}>
        <CardHeader className="pb-0 pt-2 px-6 grid grid-cols-1 lg:grid-cols-3 text-left">
          <div className="col-start-1 lg:col-span-3">
            <div>{data.title || data.name ? (
              <p className="text-tiny uppercase font-bold">{data.title || data.name}</p>
            ):(
              <Skeleton className="rounded-lg">
                <div className="pt-2 rounded-lg bg-default-300"></div>
              </Skeleton>
            )}</div>
            <div>
              {data.first_air_date || data.release_date ? (
                <small className="text-default-500">
                  {formatDate(data.first_air_date || data.release_date)}
                </small>
              ) : (
                <Skeleton className="rounded-lg">
                  <div className="pt-2 rounded-lg bg-default-300"></div>
                </Skeleton>
              )}
            </div>
          </div>
          <CircularProgress
            className="row-start-1 col-start-4 col-span-2 place-self-center"
            aria-label="Loading..."
            size="lg"
            value={(data.vote_average != null) ? data.vote_average * 10 : 0}
            formatOptions={{ 
                style: "percent",
                minimumFractionDigits: 1, // Mínimo número de dígitos fraccionarios
                maximumFractionDigits: 1 // Máximo número de dígitos fraccionarios
            }}
            color="primary"
            showValueLabel={true}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex justify-center">
          <div className="">
            {data.poster_path ? (
              <Image
                alt={"Poster de la película " + data.title}
                className="object-cover rounded-xl"
                src={image_path + data.poster_path}
                width={270}
              />
            ) : (
              <Skeleton className="rounded-lg">
                <div className="h-[270px] w-[270px] py-2 rounded-lg bg-default-300"></div>
              </Skeleton>
            )}
          </div>
        </CardBody>
      </Card> 
      </div>
    </> 
  );
}
