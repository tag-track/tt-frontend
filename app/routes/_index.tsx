import {json, MetaFunction} from "@remix-run/node";
import {EntityCard} from "~/components/islands/entity/entity_card";
import {EntityType} from "~/models/entity.type";
import {FetchEntity} from "~/utils/fetch_entity";
import {useLoaderData} from "@remix-run/react";
import {EntityCardLarge} from "~/components/islands/entity/entity_card_large";

export const meta: MetaFunction = () => {
  return [
    { title: "Tag Track" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {

  const data: EntityType[] = await FetchEntity()
  return json({entities: data})
}

export default function Index() {

  const {entities} = useLoaderData<typeof loader>()

  return (
    <div className={`
    pt-12 pb-6 w-full
    `}>
      <div className={`
      flex flex-col justify-start items-center
      gap-y-2
      `}>
        {
          entities.map(e => {
            return(
              <EntityCard entity={e} key={e.id} />
            )
          })
        }
      </div>
    </div>
  );
}
