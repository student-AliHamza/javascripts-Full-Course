const inserted = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    inserted.innerHTML = `<div class = 'color'>
    <table>
    <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>key</th>
    </tr>
   

    <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>

    
    </table>
    
    </div>`;
})