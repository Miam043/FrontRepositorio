import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import NavigationHome from '../NavigationHome';
import "../UI/CreateDocu.css";


const UpdateD = () => {
    const [fileUrl, setFileUrl] = useState();
    const [Titulo, setTitulo] = useState("");
    const [Autor, setAutor] = useState("");
    const [ISBN, setISBN] = useState("");
    const [Genero, setGenero] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [ISSN, setISSN] = useState("");
    const [img, setimg] = useState("");
    const [document, setDocument] = useState({
        img: "",
        Titulo: "",
        Autor: "",
        descripcion: "",
        ISSN: "",
        ISBN: "",
        _id: "",
    });
    const params = useParams();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:4000/api/documentos/${params.id}`)
            setDocument(res.data);
        })();
    }, [params.id]);


    const onInputChange = (e) => {
        setFileUrl(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const UpdateformData = new FormData();
        UpdateformData.append("myFile", fileUrl);
        UpdateformData.append("Titulo", Titulo);
        UpdateformData.append("Autor", Autor);
        UpdateformData.append("ISBN", ISBN);
        UpdateformData.append("Genero", Genero);
        UpdateformData.append("descripcion", descripcion);
        UpdateformData.append("ISSN", ISSN);
        UpdateformData.append("img", img);


        const res = await axios.put(`http://localhost:4000/api/documentos/${params.id}`, UpdateformData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((data) => {
            console.log(data, "DocumentRegister");
            window.location.href = "/library"
        });
        console.log(res);
    }

    return (
        <>
            <section>
                <NavigationHome /><br></br>
                <form method="put" action="#" id="#" className="formulario" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Registrar Libro </legend>

                        <div className="campo">
                            <label>Titulo</label>
                            <input
                                name="Titulo"
                                type="text"
                                className="input-text"
                                placeholder={document.Titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Autor(s)</label>
                            <input name="Autor" type="text" className="input-text" placeholder={document.Autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Genero</label>
                            <select className="formulario__campo" name="Genero"
                                onChange={(e) => setGenero(e.target.value)}>
                                <option disabled="">Selecciona una opción</option>
                                <option value="Artes y Diseño">Artes y Diseño</option>
                                <option value="Ciencias">Ciencias</option>
                                <option value="Ciencias Políticas y Sociales">Ciencias Políticas y Sociales</option>
                                <option value="Contaduría y Administración">Contaduría y Administración</option>
                                <option value="Arquitectura">Arquitectura</option>
                                <option value="Derecho">Derecho</option>
                                <option value="Economía">Economía</option>
                                <option value="Filosofía y Letras">Filosofía y Letras</option>
                                <option value="Ingeniería">Ingeniería</option>
                                <option value="Medicina">Medicina</option>
                                <option value="Medicina Veterinaria y Zootecnia">Medicina Veterinaria y Zootecnia</option>
                                <option value="Música">Música</option>
                                <option value="Odontología">Odontología</option>
                                <option value="Psicología">Psicología</option>
                                <option value="Química">Química</option>
                                <option value="Informática">Informática</option>
                                <option value="Artes Cinematográficas">Artes Cinematográficas</option>
                                <option value="Enfermería y Obstetricia">Enfermería y Obstetricia</option>
                            </select>
                        </div>

                        <div className="campo">
                            <label>Descripción</label>
                            <textarea
                                name="descripcion"
                                type="text"
                                placeholder={document.descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}></textarea>
                        </div>

                        <div>
                            <label>Si su documento no es un libro o revista no escriba nada solo envie</label>
                        </div>

                        <div className="campo">
                            <label>Libro</label>
                            <input
                                type="text"
                                name="ISBN"
                                className="input-text"
                                placeholder={document.ISBN}
                                onChange={(e) => setISBN(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>o Revista</label>
                            <input
                                type="text"
                                name="ISSN"
                                className="input-text"
                                placeholder={document.ISSN}
                                onChange={(e) => setISSN(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Link de la imagen</label>
                            <input
                                type="text"
                                name="img"
                                className="input-text"
                                placeholder={document.img}
                                onChange={(e) => setimg(e.target.value)}
                            />
                        </div>


                        <div className="campo">
                            <label>Adjunta tu archivo</label>
                            <input
                                type="file"
                                name="fileUrl"
                                onChange={onInputChange}
                                className="form-control"
                                accept=".pdf" />
                        </div>


                        <div className="alinear-derecha flex">
                            <input className="boton w-sm-100" type="submit" value="ACTUALIZAR" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default UpdateD