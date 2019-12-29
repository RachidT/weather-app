# Test technique - Front side

## Énoncé

L'objectif de ce test sera de créer une web application météo côté client. Les besoins sont les suivants :

- En tant qu'utilisateur, je souhaite pouvoir visualiser la météo de 15 grandes villes prédéfinies
- En tant qu'utilisateur, je souhaite pouvoir rechercher et ajouter n'importe quelle grande ville dans le monde afin de connaître sa météo à un instant t
- En tant qu'utilisateur, je souhaite pouvoir supprimer de la liste une ville qui ne m'intéresse pas
- En tant qu'utilisateur, je souhaite pouvoir sélectionner une ville et connaître ses prévisions météorologiques pour les 5 prochains jours
- _Bonus:_ En tant qu'utilisateur, je souhaite pouvoir comparer les prévisions météorologiques pour les 5 prochains jours entre deux villes

Vous avez carte blanche pour la création de l'UI et de l'UX. Les données seront uniquement traitées en front. Vous êtes libre d'ajouter autant de librairies utilitaires que vous le souhaitez dans votre projet si vous en ressentez le besoin.

Le projet devra être hébergé dans un repository public, sur Github/Gitlab, afin d'être évalué. Cet énoncé devra figurer à la racine du projet.

## Conditions

1. Vous devez utiliser [ReactJS](https://reactjs.org/) en tant que librairie de création d'UI

## Restrictions

1. Les préprocesseurs CSS tels que SASS, LESS ou Stylus sont interdits.
2. Les frameworks CSS tels que Bootstrap, Foundation ou PureCSS sont interdits.

## API

- Pour la capture de données météorologiques, vous êtes libre du choix de l'API. Cependant, nous recommandons la solution gratuite [OpenWeatherMap](https://openweathermap.org/).

- Pour la recherche et l'autocompletion de ville, vous êtes libre d'utiliser l'API [Google Maps](https://developers.google.com/places/web-service/autocomplete) ou une alternative libre de droit.

## Notation

Vous serez noté sur la qualité, la beauté et la simplicité de votre code. De plus, vous serez noté sur l'UI, l'ergonomie et l'UX de votre solution.

## Données

Voici la liste des villes européennes dont les résultats météorologiques doivent être affichés automatiquement:

- Paris
- Rome
- Lisbonne
- Berlin
- Londres
- Toulouse
- Marseille
- Barcelone
- Dublin
- Moscou
- Varsovie
- Vienne
- Helsinki
- Bruxelles
- Amsterdam