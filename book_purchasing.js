/**
 * @param buku 
 * @param disc
 * @param tax
 * @param stock
 * @param order
 */



 function bookPurchasing(buku, disc, tax, stock, order)
 {
    
     
     for(let i = 0; i < order; i++)
     {
        
         if(buku[i] && (i < stock))
         {
             const hrg = buku[i].harga;
             const jlhDsc  = hrg *(disc/100);
             const hargaDsc = hrg - jlhDsc;
             const pjk = hargaDsc * (tax/100);
             const hargaPjk = hargaDsc - pjk;
 
             console.group();
             console.log('Harga Barang : Rp.', hrg);
             console.log('Discount', disc,'%');
             console.log('pajak', tax,'%');
             console.log('Harga Barang setelah discount : Rp.', hargaDsc);
             console.log('Harga Barang dipotong pajak : Rp.', hargaPjk);
             console.log('Harga total : Rp.', hargaPjk);
             console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
             console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
             console.groupEnd();
             
         }
         else {
            console.log('Stok Barang Kosong');
         }
         
    }
     

 }
bookPurchasing([{judul: 'terbang', harga: 10000, printing_status: true},
                {judul: 'Sherlock Holmes', harga: 80000, printing_status: true},
                {judul: 'Detective Conan', harga: 95000, printing_status: true},
                {judul: 'Naruto', harga: 18000, printing_status: true},
                {judul: 'Overlord', harga: 50000, printing_status: true},
                {judul: 'Harry Potter', harga: 100000, printing_status: true},
                {judul: 'Lord of The Ring', harga: 120000, printing_status: true},
                {judul: 'Narnia', harga: 97000, printing_status: true}], 10, 10, 50, 10);