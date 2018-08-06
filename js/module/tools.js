console.log('import tools');

function say() {
  console.log(this);
  console.log('Hi');
}

export default say;
export { say };
