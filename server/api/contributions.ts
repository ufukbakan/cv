export default async function getContributions () {
        const token = process.env.GITHUB_TOKEN;
        if (!token) return { contributions: [] };
        const query = `
      query {
        user(login: "ufukbakan") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ query }),
        });
        const data = await response.json();
        if (data.errors) return { contributions: [] };
        const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
        const contributions = weeks.flatMap((week: any) => week.contributionDays.map((day: any) => day.contributionCount));
        const levels = contributions.map((count: number) => {
            if (count === 0) return '';
            if (count <= 3) return 'p1';
            if (count <= 6) return 'p2';
            if (count <= 9) return 'p3';
            if (count <= 12) return 'p4';
            return 'p5';
        });
        return { contributions: levels };
    }