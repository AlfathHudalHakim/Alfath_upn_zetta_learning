function bookPurchasing(buku, disc, tax, stock, order)
 {
     let result = 0;
     for(let i = 0; i < order; i++)
     {
        
         if(buku && buku.harga && buku.judul && (i < stock))
         {
             const hrg = buku.harga;
             const jlhDsc  = hrg *(disc/100);
             const hargaDsc = hrg - jlhDsc;
             const pjk = hargaDsc * (tax/100);
             const hargaPjk = hargaDsc - pjk;
             const hargaTtl = order * hargaPjk;
             result += hargaPjk;

             price = hrg;
             amntDsc =  hargaDsc;
             amntPjk =  hargaPjk;
             Total   =  hargaTtl;

 

         }
         else {
            console.log('Stok Buku ',buku.judul,' Kosong');
            break;
         }
         
    }

    console.group();
    console.log('Judul Buku                    :', buku.judul);
    console.log('Harga Barang                  : Rp.', price);
    console.log('Discount                      :', disc,'%');
    console.log('pajak                         :', tax,'%');
    console.log('Harga Barang setelah discount : Rp.', amntDsc);
    console.log('Harga Barang dipotong pajak   : Rp.', amntPjk);
    console.log('Total Pembelian               : Rp.', order);
    console.log('Harga total                   : Rp.', Total);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.groupEnd();
     
    return result;
 }

 bookPurchasing({judul: 'terbang', harga: 10000, printing_status: true},10, 10, 5, 4);
 bookPurchasing({judul: 'Sherlock Holmes', harga: 80000, printing_status: true},10, 10, 5, 3);
 bookPurchasing({judul: 'Detective Conan', harga: 95000, printing_status: true},10, 10, 5, 5);
 bookPurchasing({judul: 'Naruto', harga: 18000, printing_status: true},10, 10, 5, 2);
 bookPurchasing({judul: 'Overlord', harga: 50000, printing_status: true},10, 10, 5, 1);
 bookPurchasing({judul: 'Harry Potter', harga: 100000, printing_status: true},10, 10, 5, 10);
 bookPurchasing({judul: 'Lord of The Ring', harga: 120000, printing_status: true},10, 10, 5, 8);
 bookPurchasing({judul: 'Narnia', harga: 97000, printing_status: true}, 10, 10, 5, 2);
