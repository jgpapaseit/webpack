# webpack

## Instalación de webpack (**react + sass**)

### Inicialización nodejs

> `npm init -y`

### Instalacion de librerías webpack

> `npm i -D webpack webpack-cli`

### Creación de la llamada en desarrollo y producción

**package.json**

	"scripts": {
		"dev": "webpack --watch --mode development",
		"prod": "webpack --mode production"
	},

### Instalación de librerías sass, loaders y plugins

> `npm i -D sass sass-loader css-loader mini-css-extract-plugin`

### Instalación de librerías babel y react, presets y loaders

> `npm i -D @babel/core @babel/preset-env @babel/preset-react react react-dom babel-loader`

***

## Configuración de webpack

### Archivo básico config
**webpack.config.js**

	const path = require('path');
	module.exports = {
		entry: './src/index.js',
		module: {
			rules: []
		},
		output: {
			filename: 'main.js',
			path: path.resolve(__dirname, 'dist')
		},
		plugins: [],
		resolve: {
			extensions: []
		}
	}

> **Constante para resolución de directorios**
>
> `const path = require('path');`

> **Objeto de configuración**
>
> `module.exports = {...}`

> **Archivo principal de entrada**
>
> Nombre del archivo inicial a procesar
>
> `entry: './src/index.js',`

> **Reglas de cargadores**
>
> Array de reglas para procesar los archivos
>
> `module: { rules: [] },`

**Modelo de regla**

	{
		test: /\.<extension>$/,
		use: [
			{
				loader: '<loader>',
				options: {
					...
				}
			}
		]
	}

> **Objeto de salida**
>
> Nombre y directorio del archivo resultante del procesado
>
> `output: { filename: 'main.js', path: path.resolve(__dirname, 'dist') },`

> **Plugins**
>
> Crea instancias de plugins y sus configuraciones
>
> `plugins: [],`

> **Resolución de extensiones**
>
> Array con el listado de extensiones admitidas
>
> `resolve: { extensions: [] }`

***

### Configuración SASS ###

**Carga del plugin**

Constante para la creación de instancia y uso

	const minCssExtractPlugin = require('mini-css-extract-plugin');


**Modelo de regla para SASS**

	{
		test: /\.s[ac]ss$/,
		use: [
			minCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					sourceMap: true
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			},
		]
	}

Se observa el uso de 3 cargadores:

1. Se procesa con el cargador de sass
2. Se procesa con el cargador de css
3. Se extrae archivo resultante mediante el plugin cargado

**Creación instancia del plugin y configuración**

Se crea instancia del extractor y se le pasa como parámetro de configuración, el archivo destino

	new minCssExtractPlugin({ filename: '<nombre de archivo>' })

**Adición de extensiones para resolución de archivos**

Se debe añadir las extensiones '.sass' y '.scss' en el array de extensiones admitidas

***

### Configuración de babel para react ###

**Modelo de regla para babel**

	{
		test: /\.(js|jsx)$/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react'
					]
				}
			}
		]
	}

Se observa en opciones, un array con dos presets de babel para transpilar el código:

1. Se transpila react
2. Se transpila javascript

**Adición de extensiones para resolución de archivos**

Se debe añadir las extensiones '.js' y '.jsx' en el array de extensiones admitidas

***
