-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ecommercedb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `url_imagen` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'producto_1.gif','Cuaderno profesional / Cubiertas estándar / Espiral doble','Cuaderno Profesional Norma 580814 / Cuadro chico / 100 hojas',57),(2,'producto_3.jpg','Cuaderno profesional / Cubiertas resistentes / Doble espiral metálica / Para uso universitario o profesional','Cuaderno Profesional Norma Unicampus Lines / Cuadro grande / 160 hojas',299),(3,'producto_4.jpg','Cuaderno profesional de uso escolar / Encuadernado cosido Duralink / Lomo reforzado / Diseño de color 360° / Cubiertas de pasta gruesa (plastificado Duracover) / Stickers Norma Color / Insertos didácticos / Márgenes rojos','Cuaderno Profesional Norma Color 360 / Cuadro grande / 100 hojas',83),(4,'producto_5.jpg','Marcador para pizarrón blanco a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Hasta 350 metros / No tóxico / Borrador para pizarrón','MARCADOR AZOR MAGISTRAL + BORRADOR (NEGRO, 1 PZA.)',54),(5,'producto_6.jpg','2 Marcadores para Pizarrón Blanco Red Top / Barril de plástico / Tapa de seguridad / Punta de bala / No tóxicos / 1 Borrador para pizarrón Red Top','MARCADORES + BORRADOR RED TOP (COLORES, 3 PZS.)',70),(6,'producto_7.jpg','Pasta semirígida / Espiral metálico / Recubrimiento continuo resistente / Gramaje de papel 56 gr. / Margen rojo en escuadra / Cubierta traslucida','Cuaderno Profesional Scribe Clásico / Raya / 100 hojas',74),(8,'producto_3.jpg','Cuaderno profesional / Cubiertas resistentes / Doble espiral metálica / Para uso universitario o profesional','Cuaderno Profesional Norma Unicampus Lines / Cuadro grande / 160 hojas',299),(9,'producto_4.jpg','Cuaderno profesional de uso escolar / Encuadernado cosido Duralink / Lomo reforzado / Diseño de color 360° / Cubiertas de pasta gruesa (plastificado Duracover) / Stickers Norma Color / Insertos didácticos / Márgenes rojos','Cuaderno Profesional Norma Color 360 / Cuadro grande / 100 hojas',83),(10,'producto_5.jpg','Marcador para pizarrón blanco a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Hasta 350 metros / No tóxico / Borrador para pizarrón','MARCADOR AZOR MAGISTRAL + BORRADOR (NEGRO, 1 PZA.)',54),(11,'producto_6.jpg','2 Marcadores para Pizarrón Blanco Red Top / Barril de plástico / Tapa de seguridad / Punta de bala / No tóxicos / 1 Borrador para pizarrón Red Top','MARCADORES + BORRADOR RED TOP (COLORES, 3 PZS.)',70),(12,'producto_7.jpg','Pasta semirígida / Espiral metálico / Recubrimiento continuo resistente / Gramaje de papel 56 gr. / Margen rojo en escuadra / Cubierta traslucida','Cuaderno Profesional Scribe Clásico / Raya / 100 hojas',65.55),(13,'producto_7.jpg','Cuaderno Profesional Scribe Clásico / Raya / 150 hojas','Cuaderno Profesional Scribe Clásico / Raya / 150 hojas',74.22),(14,'producto_7.jpg','Cuaderno Profesional Scribe Clásico / Raya / 150 hojas','Cuaderno Profesional Scribe Clásico / Raya / 150 hojas',74.22),(15,'producto_7.jpg','Cuaderno Profesional Scribe Clásico / Raya / 150 hojas','Cuaderno Profesional Scribe Clásico / Raya / 150 hojas',74.22);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 14:03:15
