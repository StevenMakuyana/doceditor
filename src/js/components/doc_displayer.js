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