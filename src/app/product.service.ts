import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Aqui vamos criar o nosso crud, mas antes precisamos criar uma classe para que possamos usar os campos da nossa tabela, 
  //veja no fina do código como deve ser feita
  constructor(private dbProvider: DatabaseService) { }

  //primeio vamos criar o nosso insert
  public insert(product: Product) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        //Vamos criar dua váriaveis

        // o Sql vai conter o comando de inserção do nosso banco
        let sql = 'insert into products (name, price, duedate, active, category_id) values (?, ?, ?, ?, ?)';
        
        // aqui vai conter os dados do nosso produto
        //OBS.: O IONIC NÃO POSSUI VALORES BOLEANOS ENTÃO EM ACTIVE VAMOS USAR OS VALORES 1 PARA ATIVO E 0 PARA INATIVO
        let data = [product.name, product.price, product.duedate, product.active ? 1 : 0, product.category_id];

        // APÓS vamos chamar o executeSql e dar a ele como parametro o sql, que são os camandos de inserção
        //e o data com os dados a serem inseridos
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }


  // o update será muito parecido com o insert porem ele vai usar o comando sql de update como vemos abaixo
  public update(product: Product) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update products set name = ?, price = ?, duedate = ?, active = ?, category_id = ? where id = ?';
        let data = [product.name, product.price, product.duedate, product.active ? 1 : 0, product.category_id, product.id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  //para remover vamos usar o comando sql para deletar e usar como parametro o id do nosso produto
  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from products where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from products where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .then((data: any) => {
            
            //aqui vamos verificar se possuimos algum produto
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let product = new Product();
              product.id = item.id;
              product.name = item.name;
              product.price = item.price;
              product.duedate = item.duedate;
              product.active = item.active;
              product.category_id = item.category_id;

              return product;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll(active: boolean, name: string = null) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT p.*, c.name as category_name FROM products p inner join categories c on p.category_id = c.id where p.active = ?';
        var data: any[] = [active ? 1 : 0];

        // filtrando pelo nome
        if (name) {
          sql += ' and p.name like ?'
          data.push('%' + name + '%');
        }

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let products: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var product = data.rows.item(i);
                products.push(product);
              }
              return products;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}

//Essa é a nossa classe com os campos que iremos usa
export class Product {
  id: number;
  name: string;
  price: number;
  duedate: Date;
  active: boolean;
  category_id: number;
}
