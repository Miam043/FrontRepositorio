import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import "../UI/ListDocument.css"

/*function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}*/

export default function Loader() {
  const [documentos, setDocumentos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  //const query = useQuery();
  //const search = query.get("search");
  //console.log(search);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      /*const searchUrl = search 
      ? "/search/documentos?query=" + search
      : "http://localhost:4000/api/documentos/";*/
      const res = await axios.get("http://localhost:4000/api/documentos/");
      setDocumentos(res.data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="contenedor">
      <div className='holder'>
        <header className='header'>
          <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>Bienvenido</h2><br />
            <p className='header-text fs-18 fw-3'>Puedes consultar las novedades incluidas en el catálogo exclusivo de la Biblioteca institucional que desempeñan una labor esencial en el fomento de la alfabetización y el aprendizaje, el establecimiento de las bases para el desarrollo y la custodia del patrimonio cultural y científico universal.</p>
            <div className='search-form' >
              <div className='container'>
                <div className='search-form-content'>
                  <form className='search-form' >
                    <div className='search-form-elem flex flex-sb 
              bg-white'>
                      <input type="text"
                        className='form-control'
                        placeholder="buscar ..."
                      />
                      <button type="submit" className='flex fle-c'>
                        <FaSearch className='text-purple' size={32} />
                      </button>
                    </div>
                  </ form>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <br></br>
      <ul className="DocumentosList">
        {/*--Inicio .Producto--*/}
        {documentos.map((Documento) => (
          <div
            onClick={() => history(`/edit/${Documento._id}`)}
            key={Documento._id}>
            <li className='cardDocument'>
              <img
                className='imagenche'
                width={230}
                height={345}
                src={Documento.img}
                alt={Documento.Titulo} />
              <div className='Tittle'>{Documento.Titulo}</div>
            </li>
          </div>
        ))}
        {/*--fin .producto--*/}
      </ul>
    </main>
  )
}
