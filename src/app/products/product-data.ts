import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { productsData } from './api/products.json';
import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        'id': 1,
        'productName': 'Xmas Hat',
        'productCode': 'PIP-0001',
        'releaseDate': '03/10/2018',
        'description': 'Remix where white elements are white and not transparent so it can be used on transparent backgrounds',
        'price': 10.22,
        'starRating': 5.0,
        'imageUrl': 'https://openclipart.org/download/311105/1543645324.svg',
        'tags': ['hat', 'chrismas', 'red']
      },
      {
        'id': 2,
        'productName': 'LAMPADA AD OLIO',
        'productCode': 'PIP-0002',
        'releaseDate': '15/01/2018',
        'description': 'Lampada ad olio',
        'price': 11.22,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/download/311298/1544033187.svg'
      },
      {
        'id': 5,
        'productName': 'headphone',
        'productCode': 'PIP-0003',
        'releaseDate': '22/10/2018',
        'description': 'A simple headphone.',
        'price': 8.3,
        'starRating': 4.3,
        'imageUrl': 'https://openclipart.org/download/221493/Headphones-Icon.svg',
        'tags': ['audio', 'music', 'hardware']
      },
      {
        'id': 8,
        'productName': 'Strawberry Plant',
        'productCode': 'PIP-0004',
        'releaseDate': '05/12/2018',
        'description': 'A strawberry plant with flowers and fruits.',
        'price': 8.30,
        'starRating': 2.5,
        'imageUrl': 'https://openclipart.org/download/217678/Strawberry-Plant.svg'
      },
      {
        'id': 10,
        'productName': 'Owl Clock',
        'productCode': 'PIP-0005',
        'releaseDate': '09/11/2018',
        'description': 'cool owl clock ',
        'price': 20.45,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/download/247152/OwlClock.svg'
      }
    ];
    return { products };
  }
}
