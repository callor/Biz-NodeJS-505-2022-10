const commentListView = (cmmList) => {
    commentBtnBox.textContent = "";
    const commentList = cmmList.map((cmm) => {
      const pBox = document.createElement("p");
      pBox.className = "comment list box";
      const commentSpan = [
        {
          tag: "SPAN",
          className: " writer",
          textContent: `${cmm.ct_writer || "익명"}`,
        },
        {
          tag: "SPAN",
          className: " content",
          textContent: `${cmm.ct_comment}`,
        },
        {
          tag: "SPAN",
          className: " delete",
          innerHTML: "&times",
          id: `${cmm._id}`,
        },
      ];

      const spanList = commentSpan.map((span) => {
        let tag = document.createElement("span");
        tag.innerHMTL = `${span.innerHTML || span.textContent}`;
        tag.className = `comment ${span.className}`;
        tag.dataset.id = `${span._id}`;
        return tag;
      });
      pBox.append(...spanList);
      return pBox;
    });

    commentBtnBox.append(...commentList);