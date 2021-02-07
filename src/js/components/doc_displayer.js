export default function docDisplayer(data = []) {
    const documentsList = data.map(document => {
        return `
          <div>
            <div class="name">
              <i class="fa fa-file"></i>
              <p>${document.title}</p>
            <div>
            <div class="date">
              <p>${document.date}</p>
            </div>
          </div>
        `
    }).join("");
};