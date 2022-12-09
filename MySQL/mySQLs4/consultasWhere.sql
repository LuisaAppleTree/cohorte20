SELECT * FROM productos;
/*listas in, not in*/
SELECT * FROM productos WHERE precio NOT IN (5, 6, 6.5, 7, 8, 9, 10);
/*date*/
SELECT * FROM productos WHERE DATE(fecha_alta) BETWEEN "2015-01-01" AND "2016-07-02";
/*operaciones*/
SELECT * FROM productos WHERE precio = 18-6;
/*avg()*/
SELECT nombre, AVG(precio) AS promedio_precios FROM productos WHERE idProducto = 3;