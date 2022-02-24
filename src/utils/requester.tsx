export function requester<T>(
    url: string,
    config: RequestInit = {}
  ): Promise<T> {
    return fetch(url, config)
      .then((response) => response.json())
      .then((data) => data)
      .catch(error => {
        console.error(error)
      })
  }