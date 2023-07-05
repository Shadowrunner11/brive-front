import { useInfiniteQuery, } from "@tanstack/react-query";
import { GridItemProps, VirtuosoGrid } from "react-virtuoso";
import { client } from "../../lib/graphql.service";
import { GET_PAGINATED_CHARACTERS } from "../../graphql/characters.gql";
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { GetPaginatedCharactersQuery, Character } from "../../gql/graphql";
import { Card } from '../../components/Card';


import styles from './styles.module.css'

import styled from '@emotion/styled'
import { ButtonMore } from "../ButtonMore";

const ItemContentCard = (index: number, { image, name, species }: Character)=>(
  <Card
    key={index + (name ?? 'no content')}
    cardTop={<h3><strong>{name}</strong></h3>} 
    cardMediaURL={image}
    cardAction={
      <ButtonMore />
    }
    cardContent={
      <div>
        <h3>{species}</h3>
      </div>
    }
    />
)

const Footer = ()=> <div>Loading...</div>

const Item = ({children}: PropsWithChildren<GridItemProps>) => <div className={styles.item}>{children}</div>

// TODO should not depend on styled components, not a portable solution
const List: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`

export const RickAndMortyList = ()=>{
  const [page, setPage] = useState(1)

  // TODO: check if IoC is possible
  const { data, fetchNextPage } = useInfiniteQuery(
    ['rickAndMorty'], 
    async ({ pageParam })=> await client.request<GetPaginatedCharactersQuery>(GET_PAGINATED_CHARACTERS, {
      page: pageParam ?? 1
    }),)
  

  // TODO: optimize with pseudo useSingal and memoized pattern
  const flattedData = useMemo(()=> data?.pages.flatMap(({ characters })=> characters?.results ?? []), [data?.pages])

  const fetchMore = useCallback(()=>{
    setPage(prevPage => prevPage + 1)
  }, [])

  useEffect(()=> {
    fetchNextPage({
      pageParam: page
    })
  }, [page, fetchNextPage])

  if(!flattedData?.length)
    return <Footer />


  return(
    <VirtuosoGrid
      useWindowScroll
      className={styles.virtuoso} 
      style={{ height: 400 }}
      overscan={20}
      endReached={fetchMore}
      components={{ 
        Item,
        List,
        Footer
      }}
      data={flattedData as Character[] ?? []}
      itemContent={ItemContentCard}
    />
  )
}
