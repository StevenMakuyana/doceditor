export default function docDisplayer(data = []) {
    const documentsList = data.map(document => {
        return `
          <div>
            <div class="name">
              <i class="fa fa-file"></i>
              <p>${document.title}</p>
            </div>
            <div class="date">
              <p>${document.date}</p>
            </div>
            <i id="context-menu-btn" ctxid="${document.id}" class="fa fa-ellipsis-v"></i>
            <nav class="context-menu hidden" menuid="${document.id}">
              <ul>
                <li openID="${document.id}" class="open">open</li>
                <li deleteID="${document.id}" class="delete"><i class="fa fa-trash"></i> delete</li>
              </ul>
            </nav>
          </div>
        `
    }).join("");
    const header = `
      <header>
        <div>
          <h3>name</h3>
        </div>
        <div>
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