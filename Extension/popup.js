/*
 * Copyright 2011 Google Inc. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var google = new OAuth2('google', {
  client_id: '1064836068373-o9o8a3js68b63tlhspmgp1dq74dlplmu.apps.googleusercontent.com',
  client_secret: 'BATawVSFOWsV_i_CuwqSlY8I',
  api_scope: 'https://www.googleapis.com/auth/userinfo.profile'
});

google.authorize(function() {
  alert(google.getAccessToken());
});

