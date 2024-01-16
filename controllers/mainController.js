// controllers/mainController.js
import { format } from 'date-fns';

export const getIndex = (req, res) => {
  const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Format the current date
  const name = req.params.name || "";
  
  res.render('index', { name, currentDate, title : 'Node Core Concepts!!!' });
};

export const getAbout = (req, res) => {
  const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Format the current date
  res.render('about', { currentDate });
};

export const getContact = (req, res) => {
  res.send('contact');
};
