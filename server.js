import express from 'express';
import Mot from './models/table_vocabulaire.js';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/", async function (req, res) {
  const Grille = await Mot.loadMany();
  res.render('FichierEJS.ejs', {Grille});
});

app.get("/PageVocabulaire", async function (req, res) {
  const Grille = await Mot.loadMany();
  res.render('PageVocabulaire.ejs', {Grille});
});

app.post("/add", async function (req, res) {
  const mot = new Mot();
  mot.update({mot : req.body.new_mot, traduction : req.body.new_traduction, reussi : 1, total :1 })
  await mot.save();
  res.redirect('/');
});







app.post("/check/:idMots", async function (req, res) {  
  const mot =await Mot.load({ idMots: req.params.idMots});
  const traduction = mot.traduction;
  if(traduction == req.body.check_traduction ){
    mot.update({total: mot.total+1 , reussi: mot.reussi+1  });
  }
  else{
    mot.update({total: mot.total+1  });
  }
  await mot.save();
  res.redirect('/');
});

app.get("/delete/:idMots", async function (req, res) {  
  await Mot.delete({ idMots: req.params.idMots});
  res.redirect('/');
});





app.listen(3000);
