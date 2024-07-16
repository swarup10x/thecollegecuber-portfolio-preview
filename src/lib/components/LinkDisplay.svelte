<script>
    export let linkData
</script>

<div class="art-college-grid1">
    <div class="section-title-container" />
    <p class="section-title-style">{linkData.sectionTitle}</p>
  </div>

  <style>
    .art-college-grid1 {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.section-title-container {
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 21px;
  height: 15px;
  background: white;
  border-radius: 6px;
}
.section-title-style {
  flex: 0 0 auto;
  padding: 0;
  margin: 0;
  margin-left: 7px;
  font: 500 16px Inter, sans-serif;
  color: white;
  white-space: pre-wrap;
}

  </style>