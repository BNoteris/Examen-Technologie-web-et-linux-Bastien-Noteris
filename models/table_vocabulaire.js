import Model from './Model.js';

export default class Mot extends Model {

  static table = "traduction.table_vocabulaire";
  static primary = ["idMots"];
}
//CREATE USER 'nouvel_utilisateur'@'localhost' IDENTIFIED BY 'mot_de_passe';
//GRANT ALL PRIVILEGES ON *.* TO 'nouvel_utilisateur'@'localhost' WITH GRANT OPTION;