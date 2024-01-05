// controllers/mainController.js
import { format } from 'date-fns';

export const getIndex = (req, res) => {
  const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Format the current date
  res.render('index', { currentDate, title : 'Node Core Concepts' });
};

export const getAbout = (req, res) => {
  const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Format the current date
  res.render('about', { currentDate });
};
