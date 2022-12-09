SELECT * FROM tiendita.categoria;
SELECT * FROM tiendita.productos;
SELECT nombre, precio, existencia, idCategoria FROM productos WHERE idCategoria >= 3;
/*max(), min() */
SELECT MIN(existencia) AS existencia_minima, MAX(existencia) AS existencia_maxima FROM productos;
/*limit*/
SELECT * FROM productos LIMIT 10, 3;
/*order by, ascendente, descendente*/
SELECT * FROM productos ORDER BY existencia DESC;
/*operadores*/
SELECT * FROM productos WHERE (idCategoria >= 1 AND idCategoria < 3) AND precio >= 5 AND existencia >=1;
SELECT * FROM productos WHERE idCategoria = 2 OR precio >= 16;
SELECT * FROM productos WHERE idCategoria <> 1;
/* null y not null*/
SELECT * FROM productos WHERE precio IS NOT NULL;
/*between and*/
SELECT * FROM productos WHERE precio NOT BETWEEN 5 AND 10;