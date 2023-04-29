import { create } from 'zustand'
import { encode, decode } from 'js-base64'
import { fetchMock } from '@/helpers/fetchMock'

export const useUserProfile = create((set, get) => {
    return {
        basicData: {
            photo: 'https://d31i9b8skgubvn.cloudfront.net/folder/photos/5cc6258b-3b45-4d19-8d5a-504e1356470c',
            name: 'Pedro Pepito',
            lastName: 'Perez Paez',
            birthDate: '05/10/1992',
            email: 'pedropaez@gmail.com',
            address: 'Calle 67 - 23 21',
            phone: 3221119988,
            age: 26,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        fetchData: async () => {

            const { search } = window.location

            const rawData = new URLSearchParams(search)

            let basicDataFetch

            try {

                const basicData = rawData.get('b')
                basicDataFetch = JSON.parse(decode(basicData)).basicData

                if (!basicDataFetch) {
                    let resMock = await fetchMock()
                    basicDataFetch = resMock.basicData
                }

            } catch (error) {
                let resMock = await fetchMock()
                basicDataFetch = resMock.basicData
            }

            const VALUES = {
                basicData: basicDataFetch
            }

            set({ basicData: VALUES.basicData }, false, 'FETCH_DATA')
        }
    }
})


// http://localhost:3000/?eyJiYXNpY0RhdGEiOnsicGhvdG8iOiJodHRwczovL2QzMWk5Yjhza2d1YnZuLmNsb3VkZnJvbnQubmV0L2ZvbGRlci9waG90b3MvNWNjNjI1OGItM2I0NS00ZDE5LThkNWEtNTA0ZTEzNTY0NzBjIiwibmFtZSI6IlBlZHJvIFBlcGl0byAxIiwibGFzdE5hbWUiOiJQZXJleiBQYWV6IDEiLCJiaXJ0aERhdGUiOiIwNS8xMC8xOTkyIiwiZW1haWwiOiJwZWRyb3BhZXpAZ21haWwuY29tIiwiYWRkcmVzcyI6IkNhbGxlIDY3IC0gMjMgMjEiLCJwaG9uZSI6MzIyMTExOTk4OCwiYWdlIjoyNiwiZGVzY3JpcHRpb24iOiJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4ifX0=%7C