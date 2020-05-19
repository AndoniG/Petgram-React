import React, { useState, useEffect } from "react";
import { List, Item } from "./styles";
import { Category } from "../Category";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.fetch('https://petgram-server-andoni-jqbden0li.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, []);

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    // PERMITE LIMPIAR EL EVENTO PARA QUE SI CAMBIAS DE VISTA, ESE EVENTO SE ELIMINE
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )

  if (loading) {
    return 'Cargando...'
  }

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
