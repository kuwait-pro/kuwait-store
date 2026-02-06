import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { page = 1, limit = 50 } = req.query;
  
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);
  
  const start = (parseInt(page) - 1) * parseInt(limit);
  const end = start + parseInt(limit);
  
  res.status(200).json({
    products: products.slice(start, end),
    total: products.length,
    hasMore: end < products.length
  });
}
