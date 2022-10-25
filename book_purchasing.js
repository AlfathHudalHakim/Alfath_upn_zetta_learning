/**
 * @param buku 
 * @param disc
 * @param tax
 */

function bookPurchasing(buku, disc, tax)
{
    let result = 0;
    if(buku && buku.harga && buku.judul)
    {
        const hrg = buku.harga;
        const jlhDsc  = hrg *(disc/100);
        const hargaDsc = hrg - jlhDsc;
        const pjk = hargaDsc * (tax/100);
        const hargaPjk = hargaDsc - pjk;

        console.group();
        console.log('Judul Buku                    :', buku.judul);
        console.log('Harga Barang                  : Rp.', hrg);
        console.log('Discount                      :', disc,'%');
        console.log('pajak                         :', tax,'%');
        console.log('Harga Barang setelah discount : Rp.', hargaDsc);
        console.log('Harga Barang dipotong pajak   : Rp.', hargaPjk);
        console.log('Harga total                   : Rp.', hargaPjk);
        console.groupEnd();
        
    }
    return result;
}
bookPurchasing({judul: 'terbang', harga: 10000, printing_status: true}, 10, 10);