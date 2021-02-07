export default function docDisplayer(data = []) {
    const documentsList = data.map(document => {
        return `
          <div class="row-c">
            <div class="name row flex1">
              <i class="fa fa-file"></i>
              <p>${document.title}</p>
            </div>
            <div class="date flex1">
              <p>${document.date}</p>
            </div>
            <i id="context-menu-btn" ctxid="${document.id}" class="fa fa-ellipsis-v"></i>
            <nav class="context-menu hidden absolute-inline" menuid="${document.id}">
              <ul>
                <li openID="${document.id}" class="open">open</li>
                <li deleteID="${document.id}" class="delete"><i class="fa fa-trash"></i> delete</li>
              </ul>
            </nav>
          </div>
        `
    }).join("");
    const header = `
      <header class="row-c">
        <div class="flex1">
          <h3>name</h3>
        </div>
        <div class="flex1">
          <h3>date</h3>
        </div>
      </header>
    `
    return `
      <section>
        ${header}
        <div>
          ${documentsList}
        </div>
      </section>
    `
};