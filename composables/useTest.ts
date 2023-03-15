export async function useTestDoesntWork() {
  await fn();
  await useAsyncData(async () => {});
}

export async function useTestWorks() {
  await useAsyncData(async () => {});
  await fn();
}

async function fn() {}
